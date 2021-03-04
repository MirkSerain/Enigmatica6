events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: '#forge:ores/ender',
                output: Item.of('#forge:shards/ender'),
                xp: 0.5
            },
            {
                input: '#forge:ores/amber',
                output: Item.of('#forge:shards/amber'),
                xp: 0.5
            },
            {
                input: '#forge:ores/netherite',
                output: Item.of('minecraft:netherite_scrap'),
                xp: 2.0
            },
            {
                input: '#forge:ores/thallasium',
                output: Item.of('#forge:ingots/thallasium'),
                xp: 0.7
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.smelting(recipe.output, recipe.input).xp(recipe.xp);
    });
});
