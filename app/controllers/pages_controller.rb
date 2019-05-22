class PagesController < ApplicationController

  def home
    @lists
    @redditcards
    @issuecards
    @prcards

  end

  def index
    @lists
    @redditcards
    @issuecards
    @prcards
  end
end
