using Microsoft.AspNetCore.Mvc;
using music_project.API.Entities.Dto.Artist;
using music_project.API.Entities.Dto.Genre;

namespace music_project.API.Controllers.Interfaces
{
  public interface IDeezerController
  {
    Task<ActionResult<ArtistRoot>> Search(String artist);
    Task<List<GenreRootName>> GetGenre();
  }
}
