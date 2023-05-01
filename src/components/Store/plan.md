ShopItem

- name: string
- type: ItemType
- price: number
- isDollars: boolean // is this the best way?
- discount: number
- quantity: number

ItemType

- character
- lBucks
- key
- lootBox
- skin

<ShopItem>
- displays an "image"
- details about item
- displays cost
<ShopItemGroup />
- used for featuredItems

// should I just use ShopItemGroup's?
<FeaturedItems />
<AllCharacters />
<LBuckPackages />
<Skins />
<Keys />

- this will show the "sales"

AllCharacters
