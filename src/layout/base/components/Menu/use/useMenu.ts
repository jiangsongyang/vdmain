import { h, ref } from "vue";
import type { Component } from "vue";
import { NIcon } from "naive-ui";
import type { MenuOption } from "naive-ui";
import {
  FishOutline as FishIcon,
  PawOutline as PawIcon,
  BagOutline as BagOutlineIcon,
} from "@vicons/ionicons5";

const COLLAPSED_WIDTH = 100;

export const useMenu = () => {
  const activeKey = ref<string | null>(null);

  const renderIcon = (icon: Component) => () =>
    h(NIcon, null, { default: () => h(icon) });

  const menuOptions: MenuOption[] = [
    {
      label: "鱼",
      key: "fish",
      icon: renderIcon(FishIcon),
      children: [
        {
          label: "红烧",
          key: "braise",
          children: [
            {
              label: "加辣",
              key: "spicy",
            },
          ],
        },
        {
          label: "清蒸",
          key: "steamed",
          children: [
            {
              label: "不要葱",
              key: "no-green-onion",
            },
          ],
        },
      ],
    },
    {
      label: "熊掌",
      key: "bear-paw",
      icon: renderIcon(PawIcon),
      children: [
        {
          label: "保护野生动物",
          key: "protect-wild-animals",
        },
      ],
    },
    {
      label: "两个都要",
      key: "both",
      icon: renderIcon(BagOutlineIcon),
      children: [
        {
          label: "鱼和熊掌不可兼得",
          key: "can-not",
        },
      ],
    },
  ];

  return {
    menuOptions,
    COLLAPSED_WIDTH,
    activeKey,
  };
};
