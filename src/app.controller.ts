import { Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/Saludo')
  getNuevosaludo(): string {
    return this.appService.getNuevosaludo();
  }

  @Post('/Mensajederetorno')
  getReturnmesage(): string {
    return this.appService.getReturnmesage();
  }

  @Get('saludo/:nombre')
  getSaludo(@Param('nombre') nombre: string): string {
    return this.appService.getSaludo(nombre);
}
}
