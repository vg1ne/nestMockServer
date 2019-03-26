import {Controller, Get, HttpCode, Param, Put} from '@nestjs/common';

@Controller('CateringOrders')
export class CateringConcurrencyController {
    @Get(':id')
    @HttpCode(204)
    getById(@Param() params) {
        console.log(params.id);
        return 'bla'
    }

    @Put()
    putOrder(): string {
        return 'The catering request has been modified. Please refresh the screen for updates.';
    }
}