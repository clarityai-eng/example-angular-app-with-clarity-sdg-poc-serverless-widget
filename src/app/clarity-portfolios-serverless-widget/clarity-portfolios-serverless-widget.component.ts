import * as widget from '@clarity-ai/widget';
import {Component, ElementRef, OnChanges, AfterViewInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-clarity-portfolios-serverless-widget',
  templateUrl: './clarity-portfolios-serverless-widget.component.html',
  styleUrls: ['./clarity-portfolios-serverless-widget.component.css'],
})
export class ClarityPortfoliosServerlessWidgetComponent implements AfterViewInit, OnChanges {

  @ViewChild('ref', {static: false}) widgetComponentRef!: ElementRef;

  widgetOriginDomain = 'https://go.clarity.ai';
  customizationObject = {
    // fontFamily: 'Times New Roman',
    // Google fonts can also be used:
    // gFontFamily: 'Times+New+Roman',
    baseFontSize: '16px',
    fontColor: 'rgb(16, 21, 46)',
    tables: {
      headerBgColor: '#ddd',
      bodyBgColor: '#fff',
      borderColor: '#ddd',
    },
  };

  styleJSON = JSON.stringify(this.customizationObject);

  errorCallback(message: any) {
    // you can try some error recovery here of show a message to the user
    console.error(message);
  }

  ngAfterViewInit() {
    const summary = {
        name: 'Portfolio',
        totalOrganizations: 2404,
        coverageOrganizations: 1207,
        coverageWeight: 33.923973,
        scores: [
          {
            id: 'TOTAL',
            goal: 'TOTAL',
            treeLevel: 'TOTAL',
            score: 47,
            metadata: 'NONE',
            relevance: 94
          },
          {
            id: 'P_01_POVERTY',
            goal: 'P_01_POVERTY',
            treeLevel: 'GOAL',
            score: 38,
            metadata: 'NONE',
            relevance: 97
          },
          {
            id: 'P_02_END_HUNGER',
            goal: 'P_02_END_HUNGER',
            treeLevel: 'GOAL',
            score: 44,
            metadata: 'NONE',
            relevance: 100
          },
          {
            id: 'P_03_HEALTH',
            goal: 'P_03_HEALTH',
            treeLevel: 'GOAL',
            score: 43,
            metadata: 'NONE',
            relevance: 91
          },
          {
            id: 'P_04_QUALITY_EDUCATION',
            goal: 'P_04_QUALITY_EDUCATION',
            treeLevel: 'GOAL',
            score: 20,
            metadata: 'NONE',
            relevance: 62
          },
          {
            id: 'P_05_GENDER_INEQUALITY',
            goal: 'P_05_GENDER_INEQUALITY',
            treeLevel: 'GOAL',
            score: 51,
            metadata: 'NONE',
            relevance: 95
          },
          {
            id: 'P_06_WATER_AND_SANITATION',
            goal: 'P_06_WATER_AND_SANITATION',
            treeLevel: 'GOAL',
            score: 61,
            metadata: 'NONE',
            relevance: 90
          },
          {
            id: 'P_07_ENERGY',
            goal: 'P_07_ENERGY',
            treeLevel: 'GOAL',
            score: 41,
            metadata: 'NONE',
            relevance: 86
          },
          {
            id: 'P_08_ECONOMIC_GROWTH',
            goal: 'P_08_ECONOMIC_GROWTH',
            treeLevel: 'GOAL',
            score: 52,
            metadata: 'NONE',
            relevance: 96
          },
          {
            id: 'P_09_INDUSTRIES',
            goal: 'P_09_INDUSTRIES',
            treeLevel: 'GOAL',
            score: 54,
            metadata: 'NONE',
            relevance: 100
          },
          {
            id: 'P_10_INEQUALITY',
            goal: 'P_10_INEQUALITY',
            treeLevel: 'GOAL',
            score: 51,
            metadata: 'NONE',
            relevance: 97
          },
          {
            id: 'P_11_CITIES',
            goal: 'P_11_CITIES',
            treeLevel: 'GOAL',
            score: 53,
            metadata: 'NONE',
            relevance: 91
          },
          {
            id: 'P_12_SUSTAINABLE_CONSUMPTION',
            goal: 'P_12_SUSTAINABLE_CONSUMPTION',
            treeLevel: 'GOAL',
            score: 91,
            metadata: 'NONE',
            relevance: 96
          },
          {
            id: 'P_13_ENVIRONMENT',
            goal: 'P_13_ENVIRONMENT',
            treeLevel: 'GOAL',
            score: 61,
            metadata: 'NONE',
            relevance: 99
          },
          {
            id: 'P_14_BELOW_WATER',
            goal: 'P_14_BELOW_WATER',
            treeLevel: 'GOAL',
            score: 53,
            metadata: 'NONE',
            relevance: 61
          },
          {
            id: 'P_15_LAND',
            goal: 'P_15_LAND',
            treeLevel: 'GOAL',
            score: null,
            metadata: 'NOT_APPLICABLE',
            relevance: 0
          },
          {
            id: 'P_16_INSTITUTIONS',
            goal: 'P_16_INSTITUTIONS',
            treeLevel: 'GOAL',
            score: 56,
            metadata: 'NONE',
            relevance: 95
          }
        ]
      }
    ;
    const benchmark = {
        name: 'Benchmark',
        coverageWeight: 98.82530212402344,
        scores: [
          {
            id: 'TOTAL',
            goal: 'TOTAL',
            treeLevel: 'TOTAL',
            score: 43,
            metadata: 'NONE',
            relevance: 99,
            peersPercentile: 38
          },
          {
            id: 'P_01_POVERTY',
            goal: 'P_01_POVERTY',
            treeLevel: 'GOAL',
            score: 41,
            metadata: 'NONE',
            relevance: 100,
            peersPercentile: 59
          },
          {
            id: 'P_02_END_HUNGER',
            goal: 'P_02_END_HUNGER',
            treeLevel: 'GOAL',
            score: 67,
            metadata: 'NONE',
            relevance: 100,
            peersPercentile: 78
          },
          {
            id: 'P_03_HEALTH',
            goal: 'P_03_HEALTH',
            treeLevel: 'GOAL',
            score: 41,
            metadata: 'NONE',
            relevance: 94,
            peersPercentile: 44
          },
          {
            id: 'P_04_QUALITY_EDUCATION',
            goal: 'P_04_QUALITY_EDUCATION',
            treeLevel: 'GOAL',
            score: 21,
            metadata: 'NONE',
            relevance: 68,
            peersPercentile: 85
          },
          {
            id: 'P_05_GENDER_INEQUALITY',
            goal: 'P_05_GENDER_INEQUALITY',
            treeLevel: 'GOAL',
            score: 54,
            metadata: 'NONE',
            relevance: 99,
            peersPercentile: 85
          },
          {
            id: 'P_06_WATER_AND_SANITATION',
            goal: 'P_06_WATER_AND_SANITATION',
            treeLevel: 'GOAL',
            score: 53,
            metadata: 'NONE',
            relevance: 89,
            peersPercentile: 28
          },
          {
            id: 'P_07_ENERGY',
            goal: 'P_07_ENERGY',
            treeLevel: 'GOAL',
            score: 53,
            metadata: 'NONE',
            relevance: 94,
            peersPercentile: 90
          },
          {
            id: 'P_08_ECONOMIC_GROWTH',
            goal: 'P_08_ECONOMIC_GROWTH',
            treeLevel: 'GOAL',
            score: 37,
            metadata: 'NONE',
            relevance: 100,
            peersPercentile: 22
          },
          {
            id: 'P_09_INDUSTRIES',
            goal: 'P_09_INDUSTRIES',
            treeLevel: 'GOAL',
            score: 47,
            metadata: 'NONE',
            relevance: 100,
            peersPercentile: 43
          },
          {
            id: 'P_10_INEQUALITY',
            goal: 'P_10_INEQUALITY',
            treeLevel: 'GOAL',
            score: 55,
            metadata: 'NONE',
            relevance: 100,
            peersPercentile: 89
          },
          {
            id: 'P_11_CITIES',
            goal: 'P_11_CITIES',
            treeLevel: 'GOAL',
            score: 50,
            metadata: 'NONE',
            relevance: 91,
            peersPercentile: 59
          },
          {
            id: 'P_12_SUSTAINABLE_CONSUMPTION',
            goal: 'P_12_SUSTAINABLE_CONSUMPTION',
            treeLevel: 'GOAL',
            score: 93,
            metadata: 'NONE',
            relevance: 100,
            peersPercentile: 81
          },
          {
            id: 'P_13_ENVIRONMENT',
            goal: 'P_13_ENVIRONMENT',
            treeLevel: 'GOAL',
            score: 58,
            metadata: 'NONE',
            relevance: 100,
            peersPercentile: 47
          },
          {
            id: 'P_14_BELOW_WATER',
            goal: 'P_14_BELOW_WATER',
            treeLevel: 'GOAL',
            score: 52,
            metadata: 'NONE',
            relevance: 48,
            peersPercentile: 72
          },
          {
            id: 'P_15_LAND',
            goal: 'P_15_LAND',
            treeLevel: 'GOAL',
            score: null,
            metadata: 'NOT_APPLICABLE',
            relevance: 0,
            peersPercentile: null
          },
          {
            id: 'P_16_INSTITUTIONS',
            goal: 'P_16_INSTITUTIONS',
            treeLevel: 'GOAL',
            score: 59,
            metadata: 'NONE',
            relevance: 100,
            peersPercentile: 26
          }
        ]
      };
    /* out of scope for this PoC but supported
    const organizations = [
      {
        orgName: 'Kingdom of Spain',
        portfolioWeight: 7.8525111468999995,
        scores: [
          {
            id: 'TOTAL',
            treeLevel: 'TOTAL',
            score: null,
            metadata: 'NOT_AVAILABLE',
            relevance: 0,
            peersPercentile: 0
          }
        ]
      },
      {
        orgName: 'Italian Republic',
        portfolioWeight: 5.5662576537,
        scores: [
          {
            id: 'TOTAL',
            treeLevel: 'TOTAL',
            score: null,
            metadata: 'NOT_AVAILABLE',
            relevance: 0,
            peersPercentile: 0
          }
        ]
      },
      {
        orgName: 'Germany, Federal Republic of (Government)',
        portfolioWeight: 2.071946514,
        scores: [
          {
            id: 'TOTAL',
            treeLevel: 'TOTAL',
            score: null,
            metadata: 'NOT_AVAILABLE',
            relevance: 0,
            peersPercentile: 0
          }
        ]
      },
      {
        orgName: 'Republic of France',
        portfolioWeight: 1.6543355978999998,
        scores: [
          {
            id: 'TOTAL',
            treeLevel: 'TOTAL',
            score: null,
            metadata: 'NOT_AVAILABLE',
            relevance: 0,
            peersPercentile: 0
          }
        ]
      },
      {
        orgName: 'KfW',
        portfolioWeight: 1.4920974618999998,
        scores: [
          {
            id: 'TOTAL',
            treeLevel: 'TOTAL',
            score: null,
            metadata: 'NOT_AVAILABLE',
            relevance: 0,
            peersPercentile: 0
          }
        ]
      },
      {
        orgName: 'Kingdom of Belgium',
        portfolioWeight: 0.9316078345000001,
        scores: [
          {
            id: 'TOTAL',
            treeLevel: 'TOTAL',
            score: null,
            metadata: 'NOT_AVAILABLE',
            relevance: 0,
            peersPercentile: 0
          }
        ]
      },
      {
        orgName: 'SOCIETE GENERALE SA',
        portfolioWeight: 0.9183411739000005,
        scores: [
          {
            id: 'TOTAL',
            treeLevel: 'TOTAL',
            score: 47,
            metadata: 'NONE',
            relevance: 100,
            peersPercentile: 77
          }
        ]
      },
      {
        orgName: 'Svenska Handelsbanken AB',
        portfolioWeight: 0.8006972829000001,
        scores: [
          {
            id: 'TOTAL',
            treeLevel: 'TOTAL',
            score: 47,
            metadata: 'NONE',
            relevance: 81,
            peersPercentile: 77
          }
        ]
      },
      {
        orgName: 'Caixabank, S.A.',
        portfolioWeight: 0.6302672750999999,
        scores: [
          {
            id: 'TOTAL',
            treeLevel: 'TOTAL',
            score: 48,
            metadata: 'NONE',
            relevance: 100,
            peersPercentile: 87
          }
        ]
      },
      {
        orgName: 'BANQUE FEDERATIVE DU CREDIT MUTUEL S.A.',
        portfolioWeight: 0.6247664511000002,
        scores: [
          {
            id: 'TOTAL',
            treeLevel: 'TOTAL',
            score: null,
            metadata: 'NOT_AVAILABLE',
            relevance: 0,
            peersPercentile: 0
          }
        ]
      }
    ];
    */
    const serverlessData = {
      summary,
      benchmark,
      organizations: [], // out of scope for this PoC but supported,
    };

    widget.load(this.widgetOriginDomain);
    widget.refresh(this.widgetComponentRef.nativeElement, this.errorCallback);
    widget.setData(this.widgetComponentRef.nativeElement, {data: serverlessData});
  }

  ngOnChanges(): void {
    widget.refresh(this.widgetComponentRef.nativeElement, this.errorCallback);
  }
}
