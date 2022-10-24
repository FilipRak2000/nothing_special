import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
    const category1 = await prisma.categories.create({
        data:{
            name: "t-shirt",
        },
    });
    console.log(category1)
}

main()
.catch((e)=>{
    console.log(e)
    process.exit(1);
})
.finally(async () =>{
    await prisma.$disconnect;
});

      
