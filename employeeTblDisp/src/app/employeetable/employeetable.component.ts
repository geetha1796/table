import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Addemployeeval } from './employeeValueTables';
@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.css']
})
export class EmployeetableComponent implements OnInit {

  updatedGotVal:Addemployeeval=new Addemployeeval
  constructor(private fb:FormBuilder) { 
  }

  ngOnInit(): void {
  }

// EditEmp
  EditEmpForm = this.fb.group({
    fullNameedit: ['', [Validators.required, Validators.pattern('[a-zA-Z]+$')]],
    designationedit: ['', [Validators.required, Validators.pattern("[a-zA-Z]+$")]],
    salaryedit: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
    ageedit: ['', [Validators.required, Validators.pattern("^[0-9]+$"), Validators.max(120), Validators.min(1)]]
  })
  get fullNameedit(): any {
    return this.EditEmpForm.get('fullNameedit')
  }
  get designationedit(): any {
    return this.EditEmpForm.get('designationedit')
  }
  get salaryedit(): any {
    return this.EditEmpForm.get('salaryedit')
  }
  get ageedit() {
    return this.EditEmpForm.get('ageedit')
  }
  onEdit(val:any){
    this.EditEmpForm.patchValue({
      fullNameedit:val.FullName,
      designationedit:val.Designation,
      salaryedit:val.Salary,
      ageedit:val.Age
    })
  }
  onUpdateemp(val:any) {
    val.FullName=this.fullNameedit?.value
    val.Designation=this.designationedit?.value
    val.Salary=this.salaryedit?.value
    val.Age=this.ageedit?.value
    window.alert('**Updated Sucessfully')
  }
  onDelete(val:any){
    this.addEmployeeValArr.splice(val,1)
    console.log(this.addEmployeeValArr);    
  }



  // AddEmployee
  isBool:boolean=false
  addEmployeeValArr: any = []
  addEmployeeValobj: Addemployeeval = new Addemployeeval
  addEmpForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.pattern('[a-zA-Z]+$')]],
    designation: ['', [Validators.required, Validators.pattern("[a-zA-Z]+$")]],
    salary: ['', [Validators.required, Validators.pattern("^[0-9]+$")]],
    age: ['', [Validators.required, Validators.pattern("^[0-9]+$"), Validators.max(120), Validators.min(1)]]
  })
  get fullName(): any {
    return this.addEmpForm.get('fullName')
  }
  get designation(): any {
    return this.addEmpForm.get('designation')
  }
  get salary(): any {
    return this.addEmpForm.get('salary')
  }
  get age() {
    return this.addEmpForm.get('age')
  }
  onAddEmp() {
    this.isBool=true
    this.addEmployeeValobj = {
      FullName: this.fullName?.value,
      Designation: this.designation?.value,
      Salary: this.salary?.value,
      Age: this.age?.value
    }
    this.addEmployeeValArr.push(this.addEmployeeValobj)
    console.log(`Array Added Val ${this.addEmployeeValArr.length}`);
    window.alert('**Employee Added sucessfully')
  }
}
