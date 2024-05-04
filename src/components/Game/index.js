import './index.css'

import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'

const Game = props => {
  const {tabs, allImageList, thumbnailImages, activeTabId} = props
  const {currentImageId, onClickTab, onClickThumbnail} = props

  const renderThumbnails = () => (
    <ul className="thumbnails-container">
      {thumbnailImages.map(eachThumbnail => (
        <ThumbnailItem
          key={eachThumbnail.id}
          thumbnail={eachThumbnail}
          onClickThumbnail={onClickThumbnail}
        />
      ))}
    </ul>
  )

  const rendertabs = () => (
    <ul className="tab-items-container">
      {tabs.map(eachTab => (
        <TabItem
          key={eachTab.tabId}
          tabDetails={eachTab}
          onClickTab={onClickTab}
          isActive={eachTab.tabId === activeTabId}
        />
      ))}
    </ul>
  )

  const getImage = () => allImageList.find(image => image.id === currentImageId)

  const {imageUrl} = getImage()

  return (
    <div className="game-container">
      <img className="match-image" src={imageUrl} alt="match" />
      {rendertabs()}
      {renderThumbnails()}
    </div>
  )
}

export default Game
