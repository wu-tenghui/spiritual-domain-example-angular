import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {NoticeService} from '../../service/notice.service';

import {environment} from '../../environments/environment';

import ECharts = echarts.ECharts;
import EChartOption = echarts.EChartOption;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {

  array = [1, 2, 3, 4, 5];

  chartOption: EChartOption = {};

  echartsInstance: ECharts = null;

  constructor(
    private http: HttpClient,
    private noticeService: NoticeService
  ) {
  }

  ngOnInit() {
    this.http.get(environment.serviceProxy + '/welcome').subscribe((value: any) => {
        this.noticeService.success(value);
      }, (error: any) => {
        this.noticeService.error(error.statusText);
      }, () => {
        this.noticeService.info('complete');
      }
    );
    this.chartOption = {
      xAxis: {
        type: 'category',
        axisLabel: {
          fontSize: 18
        },
        axisLine: {
          lineStyle: {
            color: '#FFF'
          }
        },
        data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          fontSize: 18
        },
        axisLine: {
          lineStyle: {
            color: '#FFF'
          }
        }
      },
      series: [
        {
          type: 'line',
          smooth: true,
          symbolSize: 10,
          data: [480, 680, 360, 580, 420, 740, 300]
        },
        {
          type: 'line',
          smooth: true,
          symbolSize: 10,
          data: [380, 480, 300, 520, 280, 420, 180]
        }
      ]
    };
  }

  echartsInit(echartsInstance: ECharts) {
    this.echartsInstance = echartsInstance;
  }

  echartsClick(echartsData) {
    this.noticeService.success(echartsData.name + "：" + echartsData.value);
    window.localStorage.removeItem('token');
  }

  ngOnDestroy() {
    this.echartsInstance.dispose();
    this.noticeService.info('销毁组件成功！');
  }

}
