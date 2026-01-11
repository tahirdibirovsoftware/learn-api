import {
    Controller,
    Get,
    Post,
    Put,
    Patch,
    Delete,
    Body,
    Param,
    ParseIntPipe,
    HttpCode,
    HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import type { Item } from './item.interface';

@ApiTags('items')
@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) { }

    /**
     * GET /items - Retrieves all items
     */
    @Get()
    @ApiOperation({ summary: 'Get all items', description: 'Retrieves the complete list of items' })
    @ApiResponse({ status: 200, description: 'List of all items returned successfully' })
    findAll(): Item[] {
        return this.itemsService.findAll();
    }

    /**
     * GET /items/:id - Retrieves a single item by ID
     */
    @Get(':id')
    @ApiOperation({ summary: 'Get item by ID', description: 'Retrieves a single item by its unique ID' })
    @ApiParam({ name: 'id', type: Number, description: 'Item ID' })
    @ApiResponse({ status: 200, description: 'Item found and returned' })
    @ApiResponse({ status: 404, description: 'Item not found' })
    findOne(@Param('id', ParseIntPipe) id: number): Item {
        return this.itemsService.findOne(id);
    }

    /**
     * POST /items - Creates a new item
     */
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @ApiOperation({ summary: 'Create new item', description: 'Creates a new item with the provided data' })
    @ApiResponse({ status: 201, description: 'Item created successfully' })
    @ApiResponse({ status: 400, description: 'Invalid input data' })
    create(@Body() createItemDto: CreateItemDto): Item {
        return this.itemsService.create(createItemDto);
    }

    /**
     * PUT /items/:id - Updates entire item
     */
    @Put(':id')
    @ApiOperation({ summary: 'Update item (full)', description: 'Replaces all fields of an existing item' })
    @ApiParam({ name: 'id', type: Number, description: 'Item ID' })
    @ApiResponse({ status: 200, description: 'Item updated successfully' })
    @ApiResponse({ status: 404, description: 'Item not found' })
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateItemDto: UpdateItemDto,
    ): Item {
        return this.itemsService.update(id, updateItemDto);
    }

    /**
     * PATCH /items/:id - Partially updates an item
     */
    @Patch(':id')
    @ApiOperation({ summary: 'Update item (partial)', description: 'Updates only the provided fields' })
    @ApiParam({ name: 'id', type: Number, description: 'Item ID' })
    @ApiResponse({ status: 200, description: 'Item updated successfully' })
    @ApiResponse({ status: 404, description: 'Item not found' })
    partialUpdate(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateItemDto: UpdateItemDto,
    ): Item {
        return this.itemsService.partialUpdate(id, updateItemDto);
    }

    /**
     * DELETE /items/:id - Deletes an item
     */
    @Delete(':id')
    @ApiOperation({ summary: 'Delete item', description: 'Removes an item from the collection' })
    @ApiParam({ name: 'id', type: Number, description: 'Item ID' })
    @ApiResponse({ status: 200, description: 'Item deleted successfully' })
    @ApiResponse({ status: 404, description: 'Item not found' })
    delete(@Param('id', ParseIntPipe) id: number): { message: string } {
        return this.itemsService.delete(id);
    }
}
