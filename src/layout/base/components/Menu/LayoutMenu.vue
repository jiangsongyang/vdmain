<script setup lang="ts">
import { h, Component } from 'vue'
import { NMenu, NIcon, useMessage } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { BookOutline as BookIcon } from '@vicons/ionicons5'

function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const message = useMessage()

const menuOptions: MenuOption[] = [
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px',
      },
    },
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(BookIcon),
    children: [
      {
        label: '鼠',
        key: 'rat',
      },
    ],
  },
  {
    label: '寻羊冒险记',
    key: 'a-wild-sheep-chase',
    icon: renderIcon(BookIcon),
  },
]
</script>

<template>
  <n-menu :options="menuOptions" />
</template>
