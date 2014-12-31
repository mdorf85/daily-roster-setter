class UserController < ApplicationController
  def index
  end

  def new
    response = HTTParty.get('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20fantasysports.teams.roster%20where%20team_key%3D'342.l.100454.t.5'&format=json&diagnostics=true&callback=')
    puts response

    inspect.params
  end
end
