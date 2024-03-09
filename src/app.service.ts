import { Injectable} from '@nestjs/common';

@Injectable()
export class AppService {

  getNuevosaludo(): string {
    return '¡Hola Mundo!';
  }

  getReturnmesage(): string {
    return '¡Bienvenido Usuario!'
  }

  getSaludo(nombre: string): string {
    return `¡Hola, ${nombre}! ¿Cómo estás?`;
  }

}
