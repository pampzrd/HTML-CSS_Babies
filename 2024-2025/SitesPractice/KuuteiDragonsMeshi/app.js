import sqlite3 from 'sqlite3';
import {open} from 'sqlite';
import { promisify } from 'util';


async function criarEPopularTabelaReceitas(Receita,Ingredientes,Preparacao){

    const db= await open({
        filename: './kuuteidragonsmeshi.db',
        driver: sqlite3.Database
    });

    db.run(`CREATE TABLE IF NOT EXISTS receitas (Id INTEGER PRIMARY KEY,Receita TEXT, Ingredientes TEXT,Preparacao TEXT)`)

    db.run(`INSERT INTO receitas (Receita,Ingredientes,Preparacao) VALUES (?,?,?)`,[Receita,Ingredientes,Preparacao]);

}

async function deletarLinha(Id){
    const db= await open({
        filename: './kuuteidragonsmeshi.db',
        driver: sqlite3.Database
    });

    db.run(
        `DELETE FROM receitas WHERE Id = (?)`,[Id]
    );
}

async function adicionarCampo(){
    const db = await open({
        filename: './kuuteidragonsmeshi.db',
        driver:sqlite3.Database
    });
    // ALTER TABLE clientes ADD COLUMN cidade TEXT
    //db.run(`ALTER TABLE receitas ADD COLUMN Imagem TEXT`);
}

async function atualizarCampo(){
    const db = await open({
        filename:'./kuuteidragonsmeshi.db',
        driver:sqlite3.Database
    });

    //db.run(`UPDATE receitas SET Imagem="assets/imgs/pexels-angela-khebou-259135285-12931072.jpg" WHERE Id=10`)
}

/*async function puxarDados(){
    try {
    const db = await open({
        filename:'./kuuteidragonsmeshi.db',
        driver:sqlite3.Database
    })

        // Promisify the db.all method DEU ERRO USANDO PROMISIFY.POR QUE?
        db.all = promisify(db.all);

    const query=`SELECT * FROM receitas WHERE Id=?`;
    const tables = await db.all(query,[4]); // Use await here
    console.log(tables);
    await db.close(); // Close connection after operation
        return tables;
    } catch (err) {
        console.error('Error:', err);
        throw err; // Re-throw to handle in calling code
    }

    /*const dados = await fetchAll(db,query);
    return JSON.stringify(dados);*/

/*
const dados = puxarDados();
console.log('Final result:', dados);
/*const dados = puxarDados();
console.log(dados);*/

//const sqlite3 = require('sqlite3').verbose();

function puxarDados(callback) {
    const db = new sqlite3.Database('./kuuteidragonsmeshi.db');

    db.all(
        'SELECT Receita FROM receitas WHERE Id = ?',
        [4],
        (err, rows) => {
            if (err) {
                console.error(err);
                return callback(err);
            }
            db.close();
            callback(null, rows);
        }
    );
}

// Usage
puxarDados((err, dados) => {
    if (err) return console.error(err);
    console.log(dados);
});

