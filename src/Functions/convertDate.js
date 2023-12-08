


const convertDate=(num)=>{

    let date=new Date(num);
   
    return date.getDate()+"-"+(date.getMonth()+1)+"-"+(date.getFullYear());
}
export default convertDate;