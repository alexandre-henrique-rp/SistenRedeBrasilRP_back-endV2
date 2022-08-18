import 'dotenv/config'
import { Router } from 'express';
import { eAdmin } from '../middlewares/auth.js';




import enviarSms from '../lib/enviarSms.js';
import enviarEmail from '../lib/enviarEmail.js';
import ClienteNfe from '../model/nfe.js';
import { GetClinteNfe, list2, NfeSms, NfeSms2 } from '../lib/clienteNfe/vencimento.js';
import { AxioGet1 } from '../lib/axios_api.js';
import { LogErro } from '../model/logError.js';


const router1 = Router()


// session funcionalidades
//---------------------------------------------------------------------------------------------



router1.get( '/send/msg', eAdmin, async ( req, res ) => {

    try
    {
        const lista = req.body
        const response = await enviarSms( lista )
        const response2 = await enviarEmail( lista )
        res.json( response )
        res.json( response2 )

    } catch ( error )
    {
        res.status( 400 ).send( error )
    }

} );

router1.get( '/send/msg/cliente/nfe', async ( req, res ) => {

    try
    {
        const lista = await GetClinteNfe();
        const envio = await NfeSms( lista );
        const lista2 = await list2( lista );
        const envio2 = await NfeSms2( lista2 );
        res.json( envio )
        res.json( envio2 )

    } catch ( error )
    {
        res.status( 400 ).send( error )
    }

} );

router1.get( '/get/cliente/nfe', async ( req, res ) => {

    const nfe = await ClienteNfe.findAll( {
        attributes: [ 'ID', 'CPF', 'CNPJ', 'Cliente', 'RAZAO', 'Vencimento', 'Valor', 'LINK', 'TEL1', 'TEL2', 'STATUS' ],
        where: {
            STATUS: 1
        }
    } )
        .then( ( nfe ) => {
            res.json( nfe )
        } )
        .catch( ( err ) => {
            console.log( err )
        } )

} );



router1.post( '/send', async ( req, res ) => {
    
    var dados = req.body;
    await LogErro.create( dados )
        .then( () => {
            console.log( dados )
           
            return res.status( 200 ).json( {
                message: 'Parceiro de revenda cadastrado com sucesso!',
            } );
        } ).catch( err => {
            return res.status( 400 ).json( {
                error: true,
                message: 'Erro: Não foi possível cadastrar o Parceiro!'
            } );
        } );

} );


router1.get( '/send', eAdmin, function ( req, res ) {
    res.json( 'ola' )
} );

router1.get( '/itsallok', eAdmin, async ( req, res ) => {
    res.json( "it's all OK" )
} );

router1.get( '/test', eAdmin, async ( req, res ) => {
    try
    {
        res.status( 200 ).send( 'deu certo' )
    }
    catch ( err )
    {
        res.status( 400 ).send( err )
    }
} );
router1.get( '/test1', async ( req, res ) => {
   
        console.log( 'aki' )
    const resposta = await AxioGet1()
        res.status( 200 ).send( resposta )
  
} );


export default router1