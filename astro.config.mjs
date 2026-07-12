// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yaericure.github.io',
  base: '/atomic-habits',
  integrations: [
    starlight({
      title: '原子習慣',
      description: '細微改變帶來巨大成就:身分認同、四大法則,與讓好習慣自動發生的環境設計。',
      defaultLocale: 'root',
      locales: { root: { label: '正體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/theme.css'],
      lastUpdated: false,
      pagination: true,
      sidebar: [
        { label: '前言:原子習慣改變了我的人生'.replace(':',':'), slug: 'unit00' },
        {
          label: '基本原理 為何細微改變會帶來巨大差異',
          items: [
            { label: '第1章 原子習慣的驚人力量', slug: 'unit01' },
            { label: '第2章 改變習慣最有效的方法,是改變身分認同', slug: 'unit02' },
            { label: '第3章 四個簡單的步驟,讓你建立更好的習慣', slug: 'unit03' },
          ],
        },
        {
          label: '法則1 讓提示顯而易見',
          items: [
            { label: '第4章 行為改變的過程始於覺察', slug: 'unit04' },
            { label: '第5章 開始一個新習慣最好的方法', slug: 'unit05' },
            { label: '第6章 激勵被高估了,環境往往更重要', slug: 'unit06' },
            { label: '第7章 自制力的祕密', slug: 'unit07' },
          ],
        },
        {
          label: '法則2 讓習慣有吸引力',
          items: [
            { label: '第8章 如何讓習慣變得難以抗拒', slug: 'unit08' },
            { label: '第9章 家人與朋友如何形塑你的習慣', slug: 'unit09' },
            { label: '第10章 如何找出並解決壞習慣的成因', slug: 'unit10' },
          ],
        },
        {
          label: '法則3 讓行動輕而易舉',
          items: [
            { label: '第11章 精通習慣由重複開始,而非完美', slug: 'unit11' },
            { label: '第12章 最小努力原則', slug: 'unit12' },
            { label: '第13章 如何運用「兩分鐘法則」停止拖延', slug: 'unit13' },
            { label: '第14章 如何讓好習慣變得無可避免,讓壞習慣不可能發生', slug: 'unit14' },
          ],
        },
        {
          label: '法則4 讓獎賞令人滿足',
          items: [
            { label: '第15章 行為改變的基本原則', slug: 'unit15' },
            { label: '第16章 如何每天堅持好習慣', slug: 'unit16' },
            { label: '第17章 問責夥伴作用大', slug: 'unit17' },
          ],
        },
        {
          label: '進階策略 如何從A到A+',
          items: [
            { label: '第18章 基因如何影響習慣的養成', slug: 'unit18' },
            { label: '第19章 金髮女孩原則:如何在生活與工作中維持動力', slug: 'unit19' },
            { label: '第20章 建立好習慣的壞處', slug: 'unit20' },
          ],
        },
        { label: '結語:讓成果永續的祕訣'.replace(':',':'), slug: 'unit21' },
      ],
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
