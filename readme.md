# RankGun Application Centre

This is the rankgun application centre which is designed to interact with the RankGun API made using [rojo](https://rojo.space/), [roblox-ts](https://roblox-ts.com/docs/quick-start), [roblox-react](https://www.npmjs.com/package/@rbxts/react) and more.

The RankGun application centre allows people to complete questions in exchanged for a role at your group.

Please keep in mind this software is avaible for everyone under the [RankGun PolyForm Shield License](/license.md).

## Development

1. Make sure ESLint is installed.
2. Make suer prettier is installed.
3. Ensure rojo and roblox-ts are installed.
4. Run watch mode: ``npx rbxtsc -w``
5. In another terminal, run ``rojo serve`` to start Rojo.

Setup secrets: 

```json
{"API_URL": ["http://localhost:8000", "*"],"API_KEY": ["wez0TBV!gmr@xez6xcz", "*"]}
```

## Tests 

Press run to start the tests (**Not to be confused with Play**).

## Contributions 

All contributions are highly appreciated and mean a lot to us! Feel free to open them and we'll try to get back to you as fast as we can. 

## Issues 

Issues may be opened to report issues with the application centre, NOT for customer support.

## Publishing

```
rojo upload --asset_id 109627060036208 --universe_id 7561986758 --api_key {OPEN_CLOUD_API_KEY with universe-places and universe-places:write for specific place} --verbose
```
