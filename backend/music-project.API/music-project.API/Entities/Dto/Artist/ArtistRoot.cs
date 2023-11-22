namespace music_project.API.Entities.Dto.Artist
{
  public class ArtistRoot
  {
    public List<ArtistDatum> data { get; set; }
    public int total { get; set; }
    public string next { get; set; }
  }
}
