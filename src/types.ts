// etiket tipi

export type Tag = {
  label: string;
  value: string;
};

//formdan alınacak olan note verisinin tipi
export type NoteData = {
  title: string;
  tags: Tag[];
  markdown: string;
};

// state'e kaydedilecek olan note verisinin tipi
export type Note = {
  id: string;
} & NoteData; /** miras almak için & */

// partial
//generic olarak bir nesne tip alır
//ve tipin bütün özellilklerini opsiyonel yapar

const nesne: Partial<Tag> = {
  label: "selamlar",
};
