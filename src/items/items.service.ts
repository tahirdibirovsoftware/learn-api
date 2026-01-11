import { Injectable, NotFoundException } from '@nestjs/common';
import { Item } from './item.interface';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
    // In-memory storage - data is stored in this array
    // Data will be lost when the server restarts
    private items: Item[] = [
        { id: 1, name: 'Laptop', description: 'Powerful laptop for development', price: 999.99 },
        { id: 2, name: 'Mouse', description: 'Wireless ergonomic mouse', price: 49.99 },
        { id: 3, name: 'Keyboard', description: 'Mechanical keyboard with RGB', price: 129.99 },
    ];

    // Counter for generating unique IDs
    private idCounter = 4;

    // GET all items
    findAll(): Item[] {
        return this.items;
    }

    // GET single item by ID
    findOne(id: number): Item {
        const item = this.items.find((item) => item.id === id);
        if (!item) {
            throw new NotFoundException(`Item with ID ${id} not found`);
        }
        return item;
    }

    // POST - Create new item
    create(createItemDto: CreateItemDto): Item {
        const newItem: Item = {
            id: this.idCounter++,
            ...createItemDto,
        };
        this.items.push(newItem);
        return newItem;
    }

    // PUT - Update entire item (replace all fields)
    update(id: number, updateItemDto: UpdateItemDto): Item {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new NotFoundException(`Item with ID ${id} not found`);
        }

        // Update the item with new data
        this.items[index] = {
            ...this.items[index],
            ...updateItemDto,
        };

        return this.items[index];
    }

    // PATCH - Partial update (update only provided fields)
    partialUpdate(id: number, updateItemDto: UpdateItemDto): Item {
        // Same logic as update for this simple example
        return this.update(id, updateItemDto);
    }

    // DELETE - Remove item
    delete(id: number): { message: string } {
        const index = this.items.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new NotFoundException(`Item with ID ${id} not found`);
        }

        this.items.splice(index, 1);
        return { message: `Item with ID ${id} has been deleted` };
    }
}
