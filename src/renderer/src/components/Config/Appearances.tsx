import { Card, CardContent, CardHeader, CardTitle } from '@ui/card'
import { Switch } from '@ui/switch'
import { useDBSyncedState } from '~/hooks'
import { cn } from '~/utils'

export function Appearances(): JSX.Element {
  const [showRecentGamesInGameList, setShowRecentGamesInGameList] = useDBSyncedState(
    true,
    'config.json',
    ['appearances', 'gameList', 'showRecentGamesInGameList']
  )
  const [showOriginalNameInGameHeader, setShowOriginalNameInGameHeader] = useDBSyncedState(
    false,
    'config.json',
    ['appearances', 'gameHeader', 'showOriginalNameInGameHeader']
  )
  const [showThemeSwitchInSidebar, setShowThemeSwitchInSidebar] = useDBSyncedState(
    true,
    'config.json',
    ['appearances', 'sidebar', 'showThemeSwitchInSidebar']
  )
  const [highlightLocalGames, setHighlightLocalGames] = useDBSyncedState(true, 'config.json', [
    'others',
    'gameList',
    'highlightLocalGames'
  ])
  const [markLocalGames, setMarkLocalGames] = useDBSyncedState(false, 'config.json', [
    'others',
    'gameList',
    'markLocalGames'
  ])
  return (
    <Card className={cn('group')}>
      <CardHeader>
        <CardTitle className={cn('relative')}>
          <div className={cn('flex flex-row justify-between items-center')}>
            <div className={cn('flex items-center')}>外观</div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className={cn('')}>
        <div className={cn('flex flex-col gap-5 justify-center')}>
          <div className={cn('flex flex-row justify-between items-center')}>
            <div>是否在游戏列表中显示最近游戏栏目</div>
            <Switch
              checked={showRecentGamesInGameList}
              onCheckedChange={(checked) => setShowRecentGamesInGameList(checked)}
            />
          </div>
          <div className={cn('flex flex-row justify-between items-center')}>
            <div>是否在游戏详情页标题旁显示原名</div>
            <Switch
              checked={showOriginalNameInGameHeader}
              onCheckedChange={(checked) => setShowOriginalNameInGameHeader(checked)}
            />
          </div>
          <div className={cn('flex flex-row justify-between items-center')}>
            <div>是否在侧边栏显示主题切换按钮</div>
            <Switch
              checked={showThemeSwitchInSidebar}
              onCheckedChange={(checked) => setShowThemeSwitchInSidebar(checked)}
            />
          </div>
          <div className={cn('flex flex-row justify-between items-center')}>
            <div>是否在游戏列表中高亮本地游戏</div>
            <Switch
              checked={highlightLocalGames}
              onCheckedChange={(checked) => setHighlightLocalGames(checked)}
            />
          </div>
          <div className={cn('flex flex-row justify-between items-center')}>
            <div>是否在游戏列表中标记本地游戏</div>
            <Switch
              checked={markLocalGames}
              onCheckedChange={(checked) => setMarkLocalGames(checked)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
