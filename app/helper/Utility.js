const uuid = require("uuid");
const {
  randomBytes
} = require('crypto');
const jwt = require("jsonwebtoken");
const config = require("../../app/config/Auth.config");


exports.generateUUID = () => {
  var id = uuid.v1();
  return id;
};

exports.generateJWTToken = (data) => {
  var token = jwt.sign(data, config.secret, {
    expiresIn: config.exp,
  });
  return token;
};

exports.generateJWTdestroy = (data) => {
  jwt.destroy(data, config.secret)
  return true;
};

exports.getPagingData = (data, page, limit) => {
  const {
    count: totalItems,
    rows: list
  } = data;
  const currentPage = page ? +page : 0;
  const totalPages = Math.ceil(totalItems / limit);

  return {
    totalItems,
    list,
    totalPages,
    currentPage
  };
};

exports.getPagination = (page, size) => {
  const limit = size ? +size : 10;
  const offset = page ? page * limit : 0;

  return {
    limit,
    offset
  };
};



exports.isEmail = (email) => {
  var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (email !== '' && email.match(emailFormat)) {
    return true;
  }

  return false;
};

exports.CheckEmail = async (usersModal, email) => {
  var data = await usersModal.findOne({
      where: {
        email: email
      }
    })
    .then(async (user) => {

      if (user) {
        return false;
      } else {
        return true;
      }
    })
    .catch((err) => {
      return false;
    });

  return data;
};
exports.CheckPhone = async (usersModal, phone) => {
  var data = await usersModal.findOne({
      where: {
        phone: phone
      }
    })
    .then(async (user) => {
      if (user) {
        return false;
      } else {
        return true;
      }
    })
    .catch((err) => {
      return false;
    });

  return data;
};
exports.cryptoRandomNumber = (n) => {
  var add = 1,
    max = 12 - add;

  if (n > max) {
    return generate(max) + generate(n - max);
  }

  max = Math.pow(10, n + add);
  var min = max / 10;
  var number = Math.floor(Math.random() * (max - min + 1)) + min;

  return ("" + number).substring(add);
};

exports.CheckEmailCount = async (usersModal, email, userId) => {
  var data = await usersModal.findOne({
      where: {
        email: email
      }
    })
    .then(async (user) => {

      if (user) {
        if (user.id == userId) {
          return true;
        } else {
          return false;
        }

      } else {
        return true;
      }
    })
    .catch((err) => {
      return false;
    });

  return data;
};
exports.CheckPhoneCount = async (usersModal, phone, userId) => {
  var data = await usersModal.findOne({
      where: {
        phone: phone
      }
    })
    .then(async (user) => {
      if (user) {
        if (user.id == userId) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    })
    .catch((err) => {
      return false;
    });

  return data;
};

exports.CheckExits = async (dbmodel, condition, id) => {
  var data = await dbmodel.findOne({
      where: condition
    })
    .then(async (result) => {
      if (result) {
        if (result.id == id) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    })
    .catch((err) => {
      return false;
    });

  return data;
};

// exports.atteche_group= async (id,modelName,data,type,rootname,req)=> {
//   let flag=true
//   for (ele of data) {
//     if(flag){
//       let query={where:{main_id:id,type:type}}
//       if(rootname){
//         query.where.root_name=rootname
//       }
//       let recordToDelete = await modelName.findAll(query);
//         for (let iterator of recordToDelete) {
//           await iterator.destroy();
//         }
//       flag=false
//     }
//     let datagroup = {
//         main_id: id,//attach with
//         group_id: ele,
//         attach_id: ele,
//         createdAt:new Date(),
//         updatedAt:new Date(),
//         type
//     }
//     rootname? datagroup.root_name=rootname:""
//     // if(req?.body?.description  && type=="contratii"){
//     //   datagroup.description=req.body.description
//     // }
//      // Add the record
//     await modelName.create(datagroup)
//   }
// }
exports.atteche_group = async (id, modelName, data, type, rootname, req) => {
  try {
    let query = { where: { main_id: id, type: type } };

    if (rootname) {
      query.where.root_name = rootname;
    }

    // If no updated data, delete all existing attached groups
    if (!data || data.length === 0) {
      let deletedCount = await modelName.destroy(query);
      // console.log(`Deleted ${deletedCount} records for id=${id} and type=${type}`);
      return;
    }

    // Delete groups that are not present in the updated data
    let existingGroups = await modelName.findAll(query);
    for (let iterator of existingGroups) {
      if (!data.includes(iterator.group_id)) {
        await iterator.destroy();
        // console.log(`Deleted record for id=${id}, group_id=${iterator.group_id}`);
      }
    }
    for (let ele of data) {
      let existingRecord = await modelName.findOne({ where: { main_id: id, group_id: ele, type: type } });

      if (existingRecord) {       
        await existingRecord.update({
          updatedAt: new Date(),      
        });
        // console.log(`Updated record for id=${id}, group_id=${ele}`);
      } else {
        // Create new attached group
        let datagroup = {
          main_id: id,
          group_id: ele,
          attach_id: ele,
          createdAt: new Date(),
          updatedAt: new Date(),
          type
        };

        if (rootname) {
          datagroup.root_name = rootname;
        }

        await modelName.create(datagroup);
        console.log(`Created record for id=${id}, group_id=${ele}`);
      }
    }
  } catch (error) {
    console.error(`Error in atteche_group: ${error.message}`);
  }
};


// exports.atteche_referents= async (id,modelName,data,type)=> {
//   let flag =true
//   for (ele of data) {
//     if(flag){
//       let recordToDelete = await modelName.findAll({where:{main_id:id,type:type}});
//         for (let iterator of recordToDelete) {
//           await iterator.destroy();
//         }
//         flag=false
//     }
//     let datagroup = {
//         main_id: id,//attach with
//         group_id: ele.id,
//         type
//     }
//      // Add the record
//     await modelName.create(datagroup)
//   }
// }
