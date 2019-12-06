import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'kui-expense-chart',
  templateUrl: './expense-chart.component.html',
  styleUrls: ['./expense-chart.component.scss']
})
export class ExpenseChartComponent implements OnInit {

  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'bottom',            
      align: 'center',
      labels: {
        boxWidth: 10,
        usePointStyle: true
      }
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return '';
        },
      },
    }
  };
  public pieChartLabels: Label[] = ['Comida', 'Transporte', 'Bebidas'];
  public pieChartData: number[] = [500, 300, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }  

}
