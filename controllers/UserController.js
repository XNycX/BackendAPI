const UserController = {};
// const members = [
//     {
//       id: 1,
//       name: "John Doe",
//       email: "john@gmail.com",
//       status: "active",
//     },
//     {
//       id: 2,
//       name: "Bob Williams",
//       email: "bob@gmail.com",
//       status: "inactive",
//     },
//     {
//       id: 3,
//       name: "Shannon Jackson",
//       email: "shannon@gmail.com",
//       status: "active",
//     },
// ];
  
// //Funciones del controlador Usuarios
// UserController.getAll = (req, res) => {
//         res.json(members)
// };

// UserController.getUserById = (req, res) => {
//     let found = members.some(member => member.id === +req.params.id)

//     if (found) {
        
//         res.json( members.filter(member => member.id === +req.params.id))
//     }else{
//         res.status(404).json({msg:`Miembro con el id ${req.params.id} no encontrado`})
//     }
//     console.log(members)
// };

// UserController.register = (req, res) => {
//     console.log(req.body)
//     const newMember = {
//         id: members.length + 1,
//         name: req.body.name,
//         email: req.body.email,
//         status: "active",
//     }
//     if(!req.body.name || !req.body.email){
//         res.status(400).json({msg:'Por favor rellene su nombre o correo'})
//     }
//     members.push(newMember)
//     res.json(members)
// };

// UserController.update = (req, res) => {
//     const found = members.some(member => member.id === +req.params.id)

//     if(found){
//        members.forEach(member =>{
//            if(member.id === +req.params.id){
//                member.name = req.body.name ? req.body.name: member.name,
//                member.email = req.body.email ? req.body.email : member.email

//             res.json(member)
//            }
//        })
//     }else{
//         res.status(404).json({msg:`Miembro con el id ${req.params.id} no encontrado`})
//     }

// };

// UserController.delete = (req, res) => {
//     const found = members.some( member=> member.id === +req.params.id)

//     if(found){
//         res.json( members.filter(member=> member.id !== +req.params.id))
//     }else{
//         res.status(404).json({msg:`Miembro con el id ${req.params.id} no encontrado`})
//     }
// }


UserController.register = (req, res) => {

    try {
        
     let nombre = req.body.name;
     let age = req.body.age;
     let hobbie = req.body.hobbies;

     console.log(req.body)

     res.send({nombre,age,hobbie});


    } catch (error) {
        res.send(error);
    }

};
module.exports = UserController;