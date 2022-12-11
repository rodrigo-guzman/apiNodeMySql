export default function manageEmployees({Employees}){
    async function insert({id: _id = uuid(), ...orderInfo}) {
        return Employees.create({_id, ...orderInfo});
      }
    
    return Object.freeze({
        insert
    })
}