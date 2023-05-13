import { Component, ViewChild, OnInit } from '@angular/core';
import { ChartService } from 'src/app/services/chart.service';
// Ng Chart
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart-item',
  templateUrl: './chart-item.component.html',
  styleUrls: ['./chart-item.component.scss']
})
export class ChartItemComponent implements OnInit{

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  activeDatas: any = null
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> | undefined;
  public barChartPlugins = [DataLabelsPlugin];
  // Right or static chart
  public barChartCurrentData: ChartData<'bar'> | undefined;

  constructor(private chartService: ChartService) { }
  // To find current chart

  ngOnInit() {
    this.chartService.activeDatas$.subscribe(datas => {
      this.activeDatas = datas
      this.updateBarChartData();
    })
    this.updateChart()
  }
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        min: 3,
        max: 6
      },
      y: {
        min: 10,
        max: 120
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartCurrentOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        min: 0,
        max: 1
      },
      y: {
        min: 10,
        max: 120,
        display: false
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };


  updateBarChartData() {
    if (this.activeDatas) {
      this.barChartData = {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [
          { data: this.activeDatas.first, label: this.activeDatas.title[0] },
          { data: this.activeDatas.second, label: this.activeDatas.title[1] }
        ] 
      };

      this.barChartCurrentData = {
        labels: ['May-2022', 'May-2023'],
        datasets: [
          { data: [this.activeDatas.first[5], this.activeDatas.first[6]], label: 'Series A' },
          { data: [this.activeDatas.second[5], this.activeDatas.second[6]], label: 'Series B' }
        ]
      };
    }
  }
  updateXAxis(direction: 'left' | 'right') {
    if (this.barChartOptions && this.barChartOptions.scales && this.barChartOptions.scales['x']) {
      let currentMax = this.barChartOptions.scales['x'].max;
      let currentMin = this.barChartOptions.scales['x'].min;
  
      if (typeof currentMax === 'number' && typeof currentMin === 'number') {
        if (direction === 'left' && currentMax > 3) {
          this.barChartOptions.scales['x'].max = currentMax - 1;
          this.barChartOptions.scales['x'].min = currentMin - 1;
        } else if (direction === 'right' && currentMax < 6) {
          this.barChartOptions.scales['x'].max = currentMax + 1;
          this.barChartOptions.scales['x'].min = currentMin + 1;
        }
      }
    }
    this.updateChart()
  }
  updateChart(){
    this.chart?.chart?.update()
  }
  toLeft() {
    this.updateXAxis('left');
  }
  toRight() {
    this.updateXAxis('right');
  }
}
