import { Request,Response } from "express";
import { LoremIpsum } from "lorem-ipsum";

const hb1 = (req: Request,res: Response)=>{
    res.render("main/hb1", {
        uf: `Olá, voce está aprendendo`,
        expres: "Express",
        HBS: "HBS",

    });
}

const loremGenerator = (req: Request,res: Response)=>{
    const qtde: number = parseInt(req.params.numero);
    let lorem: LoremIpsum;
    let lorem_texto = "";
    for (let i: number = 0; i < qtde; i++){
        lorem = new LoremIpsum;
        lorem_texto += lorem.generateParagraphs(1)+"<br><br>";
    }
    res.send(`${lorem_texto}`);
}

const hb2 =  (req: Request,res: Response)=>{
    res.render("main/hb2",{
        poweredByExpress: true,
        nome: "Express",
        type: "Framework",

    })
}

const hb3 = (req: Request,res: Response)=>{
    res.render("main/hb3", {
        uf: "Universidade Federal do Amazonas",
        profes:[
            {nome: "David Fernandes", sala: 1238},
            {nome: "Horácio Fernandes", sala: 1248},
            {nome: "Edleno Moura", sala: 1236},
            {nome: "Elaine Harada", sala: 1231}],

    })
}

const hb4 = (req: Request,res: Response)=>{
    res.render("main/hb4", {
        technologies: [
            { name: 'Express', type: 'Framework', poweredByNodejs: true },
            { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
            { name: 'React', type: 'Library', poweredByNodejs: true },
            { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
            { name: 'Django', type: 'Framework', poweredByNodejs: false },
            { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
            { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
           ], 

    })
}

const index = (req: Request,res: Response) => {
    res.send("Hello world!");
}

const bemvindo = (req: Request, res: Response) => {
    res.send(`Seja bem vindo ${req.params.nome}`);
}

export default {hb1, hb2, hb4, hb3, loremGenerator, bemvindo, index};