import { ApiPropertyOptional } from '@nestjs/swagger';

// DTO for updating an existing item - all fields optional
export class UpdateItemDto {
    @ApiPropertyOptional({ example: 'Gaming Laptop', description: 'Name of the item' })
    name?: string;

    @ApiPropertyOptional({ example: 'High-performance gaming laptop', description: 'Item description' })
    description?: string;

    @ApiPropertyOptional({ example: 1299.99, description: 'Price in USD' })
    price?: number;
}
