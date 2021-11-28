Hi!!

Before we begin, I just want to tell you that I created this app with no prior knowledge of next.js. I purchased a course from FrontendMasters and worked my way from there.

## Getting Started

First, run the development server:

```bash
npm run dev
or
npm run start
```

To Test (For now I have only written one small unit test)

```bash
npm run test
```

## SSG or SSR

I have added code for both the variant, but only SSG is enabled for now.

My reason for choosing SSG is mainly because I felt this is kind of an app whose data is static in nature. I mean, not Very often a Country's flag, capital or population is going to change. Also it provides nice user-exeprience.

Although, one drawback I had with approach is huge build size.

## Resuability

I am following [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) approach to structure my folder. Each atomic and molecular component created using `styled-component` and `stlyed-system` are truly resuable in this application.

## Improvements

I spent most of my time in learning Next.js and figuring out which approach suits well, also there were many times I ran into simple issu like making `styled-system` and proper types for `Next.js` functions.

<ol>
  <li> <b>Testing</b> : I wanted to extensive unit test and playwright test, but I am really short of time</li>
  <li><b>Optimization</b>: If API would have been paginated, I wished to improve FCP and LCP and also add few more SEO optimization</li>
</ol>

# countries-next
