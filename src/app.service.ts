import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return "Hello World from Rohith's app!";
  }
  getAbout(): string {
    return "Rohith Chittimalla, Software Developer"
  }
}
