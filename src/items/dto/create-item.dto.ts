import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// DTO (Data Transfer Object) for creating a new item
export class CreateItemDto {
    @ApiProperty({ example: 'Laptop', description: 'Name of the item' })
    name: string;

    @ApiProperty({ example: 'Powerful laptop for development', description: 'Item description' })
    description: string;

    @ApiProperty({ example: 999.99, description: 'Price in USD' })
    price: number;

    @ApiPropertyOptional({ example: 'https://example.com/laptop.jpg', description: 'Image URL for the item' })
    image?: string;
}
