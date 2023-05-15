import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';
// Ng Chart
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { data } from 'src/app/data';
import { ChartInterface } from 'src/app/models/chart.interface';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent{
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  
  chartItem: ChartInterface[] = data[2].value
  
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        grid: {
          display: false
        },
        stacked: true,
      },
      y: {
        min: 0,
        max: 450,
        grid:{
          display: false
        },
        ticks:{
          display: false,
        },
        stacked: true
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'start'
      }
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];
  public barChartData: ChartData<'bar' | 'line'> = {
    labels: [ '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023' ],
    datasets: this.chartItem. map(chartdata => ({
      backgroundColor: chartdata.color,
      borderColor: chartdata.color,
      data: chartdata.data,
      label: chartdata.label,
      type: chartdata.line ? "line" : "bar",
      borderDash: chartdata.line ? [5, 5] : undefined,
    }))
  };
  public barCurrentChartData: ChartData<'bar' | 'line'> = {
    labels: [ 'May - 2022', 'May - 2023' ],
    datasets: this.chartItem.map(chartdata => ({
      backgroundColor: chartdata.color,
      borderColor: chartdata.color,
      data: [chartdata.data[7], chartdata.data[8]],
      label: chartdata.label,
      type: chartdata.line ? "line" : "bar",
      order: chartdata.line ? 2 : 1,
      borderDash: chartdata.line ? [5, 5] : undefined
    }))
  };
}
