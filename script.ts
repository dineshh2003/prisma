import { PrismaClient } from "@prisma/client";
import { create } from "domain";
import { emitWarning } from "process";
const prisma = new PrismaClient()

async function main(){
        // to delete a user
        await prisma.user.deleteMany();
        // to create a user 
        const prismUser = await prisma.user.create({
            data : {
                age : 27,
                name : "dinesh",
                email : "dinujangid@gmail.com",
                userPreference : {
                    create : {
                                emailUpdates : true,
                    },
                },
            },

            include : {
                userPreference : tru
            }
        })


        console.log(prismUser);
}

main()
    .catch(e=>{
        console.log(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
