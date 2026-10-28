// Error occurred prerendering page "/tweet/[id]". Read more: https://nextjs.org/docs/messages/prerender-error
// Error: The default export is not a React Component in "/tweet/[id]/page"
//     at ignore-listed frames
// Export encountered an error on /tweet/[id]/page: /tweet/[id], exiting the build.
// ⨯ Next.js build worker exited with code: 1 and signal: null
// Error: [BUILD_UTILS_SPAWN_1] Command "npm run build" exited with 1

// В Next.js App Router каждый файл page.js (или page.tsx) обязан экспортировать React-компонент по умолчанию (export default).

// Так как файл app/tweet/[id]/page.js сейчас полностью пустой, Next.js во время сборки пытается скомпилировать страницу маршрута /tweet/[id] и падает с ошибкой:
// The default export is not a React Component in "/tweet/[id]/page".

// Как решить:
// Вариант 1: Добавить базовый компонент-заглушку в app/tweet/[id]/page.js (рекомендуется)

// Вставьте в файл следующий код:

// javascript
// export default async function TweetPage({ params }) {
//   const { id } = await params;
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-4">
//       <h1 className="text-xl font-bold">Tweet {id}</h1>
//     </div>
//   );
// }
// Вариант 2: Если страница пока не нужна

// Если вы пока не планируете делать страницу отдельного твита, можно просто временно удалить папку app/tweet.

// Отправка изменений:

// После сохранения файла отправьте коммит в репозиторий:

// bash
// git add app/page.tsx 'app/tweet/[id]/page.js'
// git commit -m "Fix TypeScript types and add TweetPage component"
// git push origin main

// (Кавычки вокруг 'app/tweet/[id]/page.js' нужны, чтобы терминал не воспринимал [id] как спецсимвол).

// После этого сборка на Vercel пройдет успешно! Хотите, чтобы я применил код и сделал пуш?
