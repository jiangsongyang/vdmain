<script setup lang="ts">
import { NDropdown, NButton, useMessage } from 'naive-ui'

const options = [
  {
    label: '滨海湾金沙，新加坡',
    key: 'marina bay sands',
  },
  {
    label: '布朗酒店，伦敦',
    key: "brown's hotel, london",
  },
  {
    label: '亚特兰蒂斯巴哈马，拿骚',
    key: 'atlantis nahamas, nassau',
  },
  {
    label: '比佛利山庄酒店，洛杉矶',
    key: 'the beverly hills hotel, los angeles',
  },
]

const message = useMessage()

const handleSelect = (key: string | number) => {
  message.info(String(key))
}
</script>

<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <n-button text type="default">找个地方休息</n-button>
  </n-dropdown>
</template>

<style scoped></style>
