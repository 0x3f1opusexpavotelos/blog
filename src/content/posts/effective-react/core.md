---
title: Concurrent React
publishedAt: 04/01/2025
tags: ['recipe', 'react', 'internal', 'flight-rule', 'starter-kit']
referrers:
  - Azar Raskin
  - guillermo rauch
quote: there only two hard things in compoter science, cache invalidation and naming things phil karlton
---



## Links

- [Application monitoring sentry, analysis](#)
- [Built with](https://trends.builtwith.com/media/online-video-platform/traffic/Entire-Internet)
- [Wappalyzer](https://www.wappalyzer.com/)

## Concepts

- Middleware
- Adapter
- Hooks
- Composable
- Event-driven architecture
- Domain events:
  - Order placed
  - Order fulfilled
  - Order accepted
  - Order notify
  - Telemetry event
- Event sourcing
- Domain-driven design

## Features

- Email subscription
- Email invite link
- Notifications
- UUID, GUID, CUID (collision-resistant IDs)
- Device verification
- IP verification
- Captcha

## Error Handling

```javascript
if (err instanceof RPCError) {
  switch (err.code) {
    case RPCErrorCode.MagicLinkExpired:
    case RPCErrorCode.UserAlreadyLoggedIn:
      // Handle errors accordingly :)
      break;
  }
}
```

## Libraries and Tools

- Prisma
- DrizzleORM
- Razorpay
- LemonSqueezy
- Stripe

## State Management

### Sync State

- Redux
- Zustand
- MobX

### Async State

- React Query
- SWR
- Apollo Client
- RTK Query

## Data Fetching

```javascript
try {
  const response = await fetch('/api/auth/callback/github');
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error(`Response failed with status: ${response.status}`);
  }
} catch (error) {
  console.error(error.message);
}
```

## Query Lifecycle

- Dependent queries
- Paginated queries
- Auto refetching
- Cache management
- Prefetching
- Infinite scrolling
- Offline support

## Pagination Example

```javascript
export const PAGE_SIZE = 4;

export async function fetchRepos(sort, page) {
  const response = await fetch(
    `https://api.github.com/orgs/facebook/repos?sort=${sort}&page=${page}&per_page=${PAGE_SIZE}`
  );

  if (!response.ok) {
    throw new Error(`fetch Repos failed with status ${response.status}`);
  }
  return response.json();
}
```

## Infinite Scrolling

```javascript
function useInfinitePosts() {
  return useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: ({ pageParam }) => fetchPosts(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return allPages.length + 1;
    },
  });
}
```

## Optimistic Updates

```javascript
export function useReturnBook(book) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (book) => returnBook(book.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['books', 'detail', book.id],
      });
    },
  });
}
```

## WebSocket Integration

```javascript
export default function useWebsocketQueryInvalidate() {
  const queryClient = useQueryClient();
  React.useEffect(() => {
    const handleMessage = (event) => {
      const queryKey = JSON.parse(event.data);
      queryClient.invalidateQueries(queryKey);
    };
    const ws = new WebSocket('wss://echo.websocket.org');
    ws.addEventListener('message', handleMessage);

    return () => {
      ws.removeEventListener('message', handleMessage);
      ws.close();
    };
  }, [queryClient]);
}
```
