import express, { json } from 'express';
import cors from 'cors'
import { AgrRouter } from './routes/AGR';
import { AgrvRouter } from './routes/AGRV';
import { ContadorRouter } from './routes/CONTADOR';
import { FinanceiroRouter } from './routes/FINANCEIRO';
import { VencimentoRouter } from './routes/VENCIMENTO';
import { NfeRouter } from './routes/NFE';
import { ClienteRouter } from './routes/CLIENTE';

const app = express();
app.use(json());
app.use(cors());

app.use(AgrRouter)
app.use(AgrvRouter)
app.use(ContadorRouter)
app.use(FinanceiroRouter)
app.use(VencimentoRouter)
app.use(NfeRouter)
app.use(ClienteRouter)

app.listen(process.env.PORT || 3050, async function () {
  // await DataBese.sync(); // sinconizar bamco de dados
  console.log('🚀🚀🤖 servidor em execução 🤖🚀🚀')
  console.log(`🚀🚀🤖 ${process.env.SERVE_CONSULT} 🤖🚀🚀`)
});

//painel.redebrasilrp.com.br