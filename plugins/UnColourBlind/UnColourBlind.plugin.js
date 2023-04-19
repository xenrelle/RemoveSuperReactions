/**
 * @name UnColourBlind
 * @author xenona
 * @authorId 621137770697457674
 * @description Makes statuses full circles again.
 * @version 1.0.1
 * @source https://github.com/xenrelle/Xens-BD-Dump/tree/main/plugins/UnColourBlind
 * @updateUrl https://raw.githubusercontent.com/xenrelle/Xens-BD-Dump/main/plugins/UnColourBlind/UnColourBlind.plugin.js
 */

module.exports = class MyPlugin {
	constructor(meta) {

	}

	start() {
		BdApi.injectCSS("unColourBlind",`
			.mask-1y0tyc.svg-1G_H_8 > svg > mask > *[fill="black"]:not([cy="12.5"]):not([x="8.75"][y="2.5"]),
			.status-12NUUC.disableFlex-3I_kDH > svg > mask > *[fill="black"]:not([cy="12.5"]):not([x="1.25"][y="2.5"]) {
				display: none;
			}

			#svg-mask-status-idle > *[fill="black"],
			#svg-mask-status-dnd > *[fill="black"],
			#svg-mask-status-offline > *[fill="black"],
			#svg-mask-status-streaming > *[fill="black"] {
				opacity: 0;
			}
		`);
	}
	
	stop() {
		BdApi.clearCSS("unColourBlind");
	}
};
