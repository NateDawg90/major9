
## Component Hierarchy

**AuthFormContainer**
  - AuthForm
  - SignUpForm
  - ErrorComponent

**NavbarContainer**
  - ArtistContext
    * addMusicMenu
  - FeedContext
  - StaticContext
    * nameHoverMenu
    * configHoverMenu
  - SignedOutContext

**HomePageNavbarContainer**
  - StaticContext
  - SearchWidget

**Footer**
  Footer

**UploadContainer**
  - addAlbumSummary
  - addTrackSummary
  - addAlbumForm
    * albumName
    * albumPricing
    * albumArt
    * albumBonuses
    * albumInfo
     - albumTags
  - addTrackForm
    * trackName
    * trackPricing
    * trackInfo
      - trackTags
    * trackArt

**CollectionContainer**
  //add download stuff here

**StorefrontSidebarContainer**
  - ArtistInfo
  - discography
    * discographyItem
  - contact

**ArtDisplayContainer**
  - ArtDisplayContainer

**SupportedFansContainer**
  - FeaturedFanReview
  - OtherFansList
    * otherFansItem

**NowPlayingContainer**
  - AlbumShowInfo
  - MusicPlayer
  - PurchaseComponent
    * PurchaseModal
    * CurrencyConverterModal
  - TrackList
  - NowPlayingDescription
  - ShowTags

**SearchResultContainer**
  - SearchBar
  - SearchResultComponent
