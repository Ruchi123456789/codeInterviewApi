import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(user: any, term:any): any {
    //return null;
   // console.log("user=> ", user.username);
    console.log("val " , term);

    // user.filter(fil=>{
    //   if(fil.username.toLowerCase().includes(term.username.toLowerCase())){
    //     alert("yo")
    //   }
    // })
    if (!term) return user;
    return user.filter(data=>{
      return (data.username.includes(term));
      
    })
  }



}
