using Microsoft.AspNetCore.Mvc;
using music_project.API.Controllers.Interfaces;
using music_project.API.Entities.Dto.Artist;
using music_project.API.Entities.Dto.Genre;
using Newtonsoft.Json;

namespace music_project.API.Controllers
{
  [ApiController]
  [Route("/music")]
  public class DeezerController : Controller, IDeezerController
  {
    private readonly string url = "https://api.deezer.com";
    static HttpClient client = new HttpClient();

    [HttpGet("search/{artist}")]
    public async Task<ActionResult<ArtistRoot>> Search(String artist)
    {
      var response = await client.GetAsync(url + $"/search?q={artist}");
      var data = JsonConvert.DeserializeObject<ArtistRoot>(await response.Content.ReadAsStringAsync());
      return Ok(data);
    }

    [HttpGet("/get")]
    public async Task<List<GenreRootName>> GetGenre()
    {
      var response = await client.GetAsync(url + $"/genre");
      var data = JsonConvert.DeserializeObject<AllGenreRoot>(await response.Content.ReadAsStringAsync());
      var result = new List<GenreRootName>();

      foreach (var item in data.data)
      {
        var id = item.id;
        var name = item.name;
        var artist = await client.GetAsync(url + $"/genre/{id}/artists");
        var artistData = JsonConvert.DeserializeObject<GenreRoot>(await artist.Content.ReadAsStringAsync());
        result.Add(new GenreRootName{ data = artistData, name = name });
      }
      return result;
    }
  }
}
