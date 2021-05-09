import axios from "axios"
import {
  Character,
  Endpoint,
  Movie,
  Planet,
  SWApiResponse,
} from "./swapi.types"

class SWApi {
  private readonly baseUrl: string

  constructor() {
    this.baseUrl = "http://swapi.dev/api/"
  }

  private static async makeRequest(url: string) {
    const { data } = await axios.get(url)
    return data
  }

  private async fetchResults<ItemType>(
    endpoint: Endpoint,
    searchPhrase?: string
  ) {
    const results: ItemType[] = []
    let nextUrl: string | null =
      this.baseUrl + endpoint + (searchPhrase ? `/?search=${searchPhrase}` : "")

    do {
      const data: SWApiResponse<ItemType> = await SWApi.makeRequest(nextUrl)
      results.push(...data.results)
      nextUrl = data.next
    } while (nextUrl)

    return results
  }

  public async getMovies(): Promise<Movie[]> {
    return this.fetchResults<Movie>(Endpoint.Movies)
  }

  public async getPlanets(): Promise<Planet[]> {
    return this.fetchResults<Planet>(Endpoint.Planets)
  }

  public async searchCharacters(searchPhrase: string): Promise<Character[]> {
    return this.fetchResults<Character>(Endpoint.Characters, searchPhrase)
  }
}

const swApi = new SWApi()

export default swApi
