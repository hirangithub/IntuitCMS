import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {

  constructor() { }

  getBundles(){
    return [
      {
        title: "Getting started in QuickBooks Online Accountant",
        total_lessons: 6,
        duration: "12 min",
        cpe_credits: "1.5", 
        lessons : [
          {
            title: "Getting started in QuickBooks Online Accountant",
            learning_outcome:[
              {
                title: "Establish a potential client's QuickBooks Online and QuickBooks Self-Employed needs",
                type: "Learning Outcome",
                duration: "20 min",
                template: "Introduction template",
                additional_description: ""
              },
              {
                title: "Identify how to earn points in the new ProAdvisor benefits program and move through the tiers",
                type: "Learning Outcome",
                duration: "30 min",
                template: "", 
                additional_description: "Exam (3) KC (1) CPE (2)"
              },
              {
                title: "Recognize where QuickBooks Online sits in Intuit’s product suite",
                type: "Learning Outcome",
                duration: "30 min",
                template: "", 
                additional_description: "Exam (3) KC (1) CPE (2)"
              },
              {
                title: "Module One Review - Getting started in QuickBooks Online Accountant",
                type: "Learning Outcome",
                duration: "30 min",
                template: "", 
                additional_description: "Exam (0) KC (1) CPE (2)"
              }
            ]
          },
          {
            title: "Your client's QuickBooks Online",
            learning_outcome:[
              {
                title: "Introducing workflows",
                type: "Lesson content specific",
                duration: "10 min",
                template: "",
                additional_description: "Exam (3) KC (1) CPE (2)"
              },
              {
                title: "Recognize where QuickBooks Online sits in Intuit’s product suite",
                type: "Learning Outcome",
                duration: "15 min",
                template: "",
                additional_description: "KC (1) CPE (2)" 
              },
              {
                title: "Identify how to earn points in the new ProAdvisor benefits program and move through the tiers",
                type: "Learning Outcome",
                duration: "15 min",
                template: "",
                additional_description: "KC (1) CPE (2)" 
              },
              {
                title: "Module Two Review - Your client's QuickBooks Online",
                type: "Learning Outcome",
                duration: "15 min",
                template: "",
                additional_description: "KC (1) CPE (2)" 
              },
              {
                title: "The mobile app",
                type: "Lesson content specific",
                duration: "15 min",
                template: "",
                additional_description: "KC (1) CPE (2)" 
              }
            ]
          }
        ] 
      },
      {
        title: "Your client's QuickBooks Online",
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
                title: "Recognize the main features of QuickBooks Online Accountant and how to access clients’ QuickBooks Online and the Accountant Tools",
                type: "Learning Outcome",
                duration: "30 min",
                template: "", 
                additional_description: "Exam (3) KC (1) CPE (2)"
              },
              {
                title: "Establish a potential client's QuickBooks Online and QuickBooks Self-Employed needs",
                type: "Learning Outcome",
                duration: "30 min",
                template: "", 
                additional_description: "Exam (3) KC (1) CPE (2)"
              },
              {
                title: "Recognize where QuickBooks Online sits in Intuit’s product suite",
                type: "Learning Outcome",
                duration: "30 min",
                template: "", 
                additional_description: "Exam (3) KC (1) CPE (2)"
              },
              {
                title: "Module Two Review - Your client's QuickBooks Online",
                type: "Learning Outcome",
                duration: "30 min",
                template: "", 
                additional_description: "Exam (3) KC (1) CPE (2)"
              }
            ]
          }
        ] 
      },
      {
        title: "Sales and Customers",
        total_lessons: 6,
        duration: "12 min",
        cpe_credits: "1.5", 
        lessons : [
          {
            title: "The customer workflow",
            learning_outcome:[
              {
                title: "Identify how to earn points in the new ProAdvisor benefits program and move through the tiers",
                type: "Learning Outcome",
                duration: "30 min",
                template: "", 
                additional_description: "Exam (3) KC (1) CPE (2)"
              },
              {
                title: "Recognize where QuickBooks Online sits in Intuit’s product suite",
                type: "Learning Outcome",
                duration: "30 min",
                template: "", 
                additional_description: "Exam (3) KC (1) CPE (2)"
              }
            ]
          },
          {
            title: "The sales center",
            learning_outcome:[
              {
                title: "Introducing workflows",
                type: "Lesson content specific",
                duration: "10 min",
                template: "",
                additional_description: "Exam (3) KC (1) CPE (2)"
              },
              {
                title: "Module Two Review - Your client's QuickBooks Online",
                type: "Learning Outcome",
                duration: "15 min",
                template: "",
                additional_description: "KC (1) CPE (2)" 
              },
              {
                title: "Sales and receipts",
                type: "Lesson content specific",
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
