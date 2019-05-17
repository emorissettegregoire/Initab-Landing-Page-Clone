class PagesController < ApplicationController

  def home
    @lists
    @redditcards
    @githubcards
  end

  def index
  end
end
