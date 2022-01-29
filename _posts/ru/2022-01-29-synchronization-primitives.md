---
title: Примитивы синхронизации в Python
#permalink: /synchronization-primitives-in-python/
lang: ru
---
# Примитивы синхронизации в Python
- [Lock](#lock)
- [RLock](#rlock)
- [Semaphore](#semaphore)
- [Bounded Semaphore](#bounded-semaphore)
- [Event](#event)
- [Condition](#condition)
## Зачем?
- синхронизация потоков (thread synchronization)
- совместно используемые данные (shared data)
- порядок выполнения / состояние гонки (race condition) - повреждение совместно используемых данных[^1]

## Но ведь есть asyncio?
Многопоточность (и многопроцессорность) использует *вытесняющую многозадачность*, следующая задача начинает выполняться при наступлении определённых событий или по прошествии определённого времени.
Недостаток: непонятно, когда наступит переключение
- 1 задача: Сейчас налево, а через 100 метров повернуть на улицу Пе...[*переключение*]
- 2 задача: 343*2 + ...[*переключение*]

Asyncio же использует *кооперативную многозадачность* - следующая задача выполняется, когда предыдующая явно подаёт сигнал об этом.

## Lock
## RLock
## Semaphore
## Bounded Semaphore
## Event
## Condition

[^1]: https://www.dabeaz.com/usenix2009/concurrent/Concurrent.pdf

