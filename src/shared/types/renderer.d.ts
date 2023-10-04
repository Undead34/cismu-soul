export interface IMusic {
  id: string;
  title: string;
  artist: string;
  album: string;
  file: string;
}

interface IArtist {
  gid: string;
  name: string;
  artist_name: string;
  description: string;
  artist_image: string;
  history: string;
}

interface IAlbum {
  gid: string;
  name: string;
  artist: IArtist[];
  label: string;
  date: { year: 2021; month: 5; day: 7 };
  cover_group: {
    image: [
      {
        file_id: string;
        size: "DEFAULT";
        width: 300;
        height: 300;
      },
      {
        file_id: string;
        size: "SMALL";
        width: 64;
        height: 64;
      },
      {
        file_id: string;
        size: "LARGE";
        width: 640;
        height: 640;
      },
    ];
  };
}

interface IMusicC {
  private_id: string;
  public_id: string;
  has_lyrics: boolean;
  canonical_uri: "https://cismu.com/track/random_public_id";
  language_of_performance: string[];
  artists: IArtist[];
  album: IAlbum;
  files: {
    online: [
      {
        file_id: string;
        format: "OGG_VORBIS_320";
      },
      {
        file_id: string;
        format: "AAC_24";
      },
    ];
    offline: [
      {
        file_id: string;
        format: string;
        path: string;
      },
    ];
  };
  preview: [
    {
      file_id: string;
      preview_url: string;
      format: string;
    },
  ];
  metadata: {
    title: string;
    duration: number;
    cover_group: {
      image: [
        {
          file_id: string;
          size: "DEFAULT";
          width: 300;
          height: 300;
        },
        {
          file_id: string;
          size: "SMALL";
          width: 64;
          height: 64;
        },
        {
          file_id: string;
          size: "LARGE";
          width: 640;
          height: 640;
        },
      ];
    };
    lyrics?: {
      id: string;
      uri: string;
    };
    external_id: { type: "isrc"; id: string }[];
    original_audio: { uuid: string };
    original_title: string;
  };
}
