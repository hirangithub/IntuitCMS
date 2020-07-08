import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {

  constructor() { }

  getBundles(){
    return [
      {
        title: "Bundle link 1",
        total_lessons: 6,
        duration: "12 min",
        cpe_credits: "1.5", 
        lessons : [
          {
            title: "Business performance",
            learning_outcome:[
              {
                title: "Intrducing workflows",
                type: "Lesson content specific",
                duration: "20 min",
                template: "Introduction template",
                additional_description: ""
              },
              {
                title: "Establish a potential client's QuickBooks Online and QuickBooks Self-Employed needs",
                type: "Learning Outcome",
                duration: "30 min",
                template: "", 
                additional_description: "Exam (3) KC (1) CPE (2)"
              }
            ]
          },
          {
            title: "What's new with deposites",
            learning_outcome:[
              {
                title: "Recognize how to create feeds to Quickbooks Online",
                type: "Learning Outcome",
                duration: "10 min",
                template: "",
                additional_description: "Exam (3) KC (1) CPE (2)"
              },
              {
                title: "Describe the billing options availabel for pricing",
                type: "Learning Outcome",
                duration: "15 min",
                template: "",
                additional_description: "KC (1) CPE (2)" 
              }
            ]
          }
        ] 
      },
      {
        title: "Bundle link 2",
        total_lessons: 10,
        duration: "21 min",
        cpe_credits: "2.1 CPE credits", 
        lessons : [
          {
            title: "Business performance",
            learning_outcome:[
              {
                title: "Intrducing workflows",
                type: "Lesson content specific",
                duration: "20 min",
                template: "Introduction template",
                additional_description: ""
              },
              {
                title: "Establish a potential client's QuickBooks Online and QuickBooks Self-Employed needs",
                type: "Learning Outcome",
                duration: "30 min",
                template: "", 
                additional_description: "Exam (3) KC (1) CPE (2)"
              }
            ]
          },
          {
            title: "What's new with deposites",
            learning_outcome:[
              {
                title: "Recognize how to create feeds to Quickbooks Online",
                type: "Learning Outcome",
                duration: "10 min",
                template: "",
                additional_description: "Exam (3) KC (1) CPE (2)"
              },
              {
                title: "Describe the billing options availabel for pricing",
                type: "Learning Outcome",
                duration: "15 min",
                template: "",
                additional_description: "KC (1) CPE (2)" 
              }
            ]
          }
        ] 
      }
    ]
  }
}
