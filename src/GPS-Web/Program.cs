using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using Serilog;
using System.Threading.Tasks;
using Serilog.Sinks.Elasticsearch;

namespace GPS_Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseSerilog((contex, configuration) =>
                {
                    configuration.Enrich.FromLogContext()
                        .Enrich.WithMachineName()
                        .WriteTo.Console()
                        .WriteTo.Elasticsearch(new ElasticsearchSinkOptions(new Uri(contex.Configuration["ElasticConfiguration:Uri"]))
                        {
                            IndexFormat = $"{contex.Configuration["ApplicationName"]}-logs-{contex.HostingEnvironment.EnvironmentName?.ToLower().Replace(".", "-")}-{DateTime.UtcNow:yyyy-MM}",
                            AutoRegisterTemplate = true,
                            NumberOfShards = 2,
                            NumberOfReplicas = 1
                        })
                        .WriteTo.Seq(contex.Configuration["SeqConfiguration:Uri"])
                        .Enrich.WithProperty("Enviroment", contex.HostingEnvironment.EnvironmentName)
                        .ReadFrom.Configuration(contex.Configuration);

                })
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
