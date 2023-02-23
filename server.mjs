import { createServer } from 'http';
const express = require('express');
const app = express();
const puppeteer = require('puppeteer');

createServer async (req, res) => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto('https://app.atendezap.net/30382/broadcast');
    await page.type('#email', 'lucasaugustog@gmail.com');
    await page.type('#password', '369258Gt@');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
    await page.waitForSelector('#root > div > div.app__content-section.open > div.broadcast-content > div:nth-child(2) > div > div.bc-table__item > div.table-broadcast-container__cell__block__last > button > span.MuiIconButton-label');
    await page.click('#root > div > div.app__content-section.open > div.broadcast-content > div:nth-child(2) > div > div.bc-table__item > div.table-broadcast-container__cell__block__last > button > span.MuiIconButton-label');
    await browser.close();
    res.status(200).send('Clicou no botão com sucesso');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao clicar no botão');
  }).listen(process.env.PORT);
